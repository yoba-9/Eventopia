package com.eventopia.config;

import com.eventopia.entity.*;
import com.eventopia.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final AdminRepository adminRepository;
    private final OrganizerRepository organizerRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // Create roles
        createRoleIfNotExists("ROLE_USER", "Regular user who can browse and book events");
        createRoleIfNotExists("ROLE_ORGANIZER", "Event organizer who can create and manage events");
        createRoleIfNotExists("ROLE_ADMIN", "Administrator with full system access");

        // Create admin user
        createAdminIfNotExists();

        // Create sample organizer
        createSampleOrganizer();

        // Create sample user
        createSampleUser();
    }

    private void createRoleIfNotExists(String name, String description) {
        if (!roleRepository.existsByName(name)) {
            Role role = Role.builder()
                    .name(name)
                    .description(description)
                    .build();
            roleRepository.save(role);
            System.out.println("Created role: " + name);
        }
    }

    private void createAdminIfNotExists() {
        if (!userRepository.existsByEmail("admin@eventopia.com")) {
            Role adminRole = roleRepository.findByName("ROLE_ADMIN")
                    .orElseThrow(() -> new RuntimeException("Admin role not found"));

            Admin admin = Admin.builder()
                    .username("admin")
                    .email("admin@eventopia.com")
                    .password(passwordEncoder.encode("admin123"))
                    .role(adminRole)
                    .adminLevel("SUPER_ADMIN")
                    .canManageUsers(true)
                    .canManageEvents(true)
                    .canManageOrganizers(true)
                    .build();

            adminRepository.save(admin);
            System.out.println("Admin user created: admin@eventopia.com / admin123");
        }
    }

    private void createSampleOrganizer() {
        if (!userRepository.existsByEmail("organizer@eventopia.com")) {
            Role organizerRole = roleRepository.findByName("ROLE_ORGANIZER")
                    .orElseThrow(() -> new RuntimeException("Organizer role not found"));

            Organizer organizer = Organizer.builder()
                    .username("eventmaster")
                    .email("organizer@eventopia.com")
                    .password(passwordEncoder.encode("organizer123"))
                    .role(organizerRole)
                    .companyName("Event Masters Inc.")
                    .contactNumber("+1234567890")
                    .website("www.eventmasters.com")
                    .bio("Professional event management company with 10+ years experience")
                    .verified(true)
                    .verificationDate(LocalDateTime.now())
                    .build();

            organizerRepository.save(organizer);
            System.out.println("Sample organizer created: organizer@eventopia.com / organizer123");
        }
    }

    private void createSampleUser() {
        if (!userRepository.existsByEmail("user@eventopia.com")) {
            Role userRole = roleRepository.findByName("ROLE_USER")
                    .orElseThrow(() -> new RuntimeException("User role not found"));

            User user = User.builder()
                    .username("john_doe")
                    .email("user@eventopia.com")
                    .password(passwordEncoder.encode("user123"))
                    .role(userRole)
                    .enabled(true)
                    .build();

            userRepository.save(user);
            System.out.println("Sample user created: user@eventopia.com / user123");
        }
    }
}