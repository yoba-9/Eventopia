package com.eventopia.security;
import com.eventopia.entity.User;
import com.eventopia.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
@Service
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;
    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Note: In our system, username is actually email
        User user = userRepository.findByEmail(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + username));
        return org.springframework.security.core.userdetails.User
            .withUsername(user.getEmail()) // Use email as username
            .password(user.getPassword())
            .authorities(user.getAuthorities())
            .build();
    }
}
