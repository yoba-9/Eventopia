package com.eventopia.config;

import com.eventopia.entity.Role;
import com.eventopia.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {
        // Create roles WITHOUT "ROLE_" prefix (matching AuthenticationService)
        initializeRole("USER", "Regular user");
        initializeRole("ADMIN", "Administrator");
        initializeRole("ORGANIZER", "Event organizer");

        System.out.println("✓ Database roles initialized successfully");
    }

    private void initializeRole(String name, String description) {
        // Check if role already exists (exact match)
        if (roleRepository.findByName(name).isEmpty()) {
            roleRepository.save(Role.builder()
                    .name(name)
                    .description(description)
                    .build());
            System.out.println("Created role: " + name);
        } else {
            System.out.println("Role already exists: " + name);
        }
    }
}