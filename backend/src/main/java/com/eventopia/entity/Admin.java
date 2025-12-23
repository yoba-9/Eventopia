package com.eventopia.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "admins")
@DiscriminatorValue("ADMIN")
@PrimaryKeyJoinColumn(name = "user_id")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Admin extends User {

    @Column(name = "admin_level")
    @Builder.Default
    private String adminLevel = "SUPER_ADMIN";

    @Column(name = "can_manage_users")
    @Builder.Default
    private boolean canManageUsers = true;

    @Column(name = "can_manage_events")
    @Builder.Default
    private boolean canManageEvents = true;

    @Column(name = "can_manage_organizers")
    @Builder.Default
    private boolean canManageOrganizers = true;
}