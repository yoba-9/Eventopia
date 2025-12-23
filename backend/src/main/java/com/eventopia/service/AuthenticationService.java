package com.eventopia.service;

import com.eventopia.dto.AuthenticationRequest;
import com.eventopia.dto.AuthenticationResponse;
import com.eventopia.dto.RegisterRequest;
import com.eventopia.entity.Role;
import com.eventopia.entity.User;
import com.eventopia.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final RoleService roleService;
    // Remove this if not using: private final UserMapper userMapper;

    @Transactional
    public AuthenticationResponse register(RegisterRequest request) {
        // Validate request
        validateRegisterRequest(request);

        // Default to USER role if not specified
        String roleName = (request.getRole() != null && !request.getRole().trim().isEmpty()) ?
                request.getRole().trim() : "ROLE_USER";

        Role userRole = roleService.findByName(roleName)
                .orElseThrow(() -> new RuntimeException("Role not found: " + roleName));

        // Generate username from email if not provided
        String username = generateUsername(request);

        // Check if user already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already registered: " + request.getEmail());
        }

        if (userRepository.existsByUsername(username)) {
            throw new RuntimeException("Username already taken: " + username);
        }

        // Create user using builder
        User user = User.builder()
                .username(username)
                .email(request.getEmail().trim().toLowerCase())
                .password(passwordEncoder.encode(request.getPassword()))
                .firstName(request.getFirstName() != null ? request.getFirstName().trim() : null)
                .lastName(request.getLastName() != null ? request.getLastName().trim() : null)
                .role(userRole)
                .phone(request.getPhone() != null ? request.getPhone().trim() : null)
                .profilePicture(request.getProfilePicture())
                .enabled(true)
                .build();

        userRepository.save(user);

        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        // Validate authentication request
        if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
            throw new RuntimeException("Email is required");
        }

        if (request.getPassword() == null || request.getPassword().isEmpty()) {
            throw new RuntimeException("Password is required");
        }

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail().trim().toLowerCase(),
                        request.getPassword()
                )
        );

        var user = userRepository.findByEmail(request.getEmail().trim().toLowerCase())
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    // Helper method to validate registration request
    private void validateRegisterRequest(RegisterRequest request) {
        if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
            throw new RuntimeException("Email is required");
        }

        if (request.getPassword() == null || request.getPassword().isEmpty()) {
            throw new RuntimeException("Password is required");
        }

        if (request.getPassword().length() < 6) {
            throw new RuntimeException("Password must be at least 6 characters long");
        }
    }

    // Helper method to generate username
    private String generateUsername(RegisterRequest request) {
        if (request.getUsername() != null && !request.getUsername().trim().isEmpty()) {
            return request.getUsername().trim();
        }

        // Generate from email (remove special characters)
        String emailPrefix = request.getEmail().split("@")[0];
        return emailPrefix.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
    }
}