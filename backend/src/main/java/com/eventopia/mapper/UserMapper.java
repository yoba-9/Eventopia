package com.eventopia.mapper;

import com.eventopia.dto.RegisterRequest;
import com.eventopia.entity.User;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "role", ignore = true) // Role will be set in service
    @Mapping(target = "password", ignore = true) // Password will be encoded in service
    @Mapping(target = "username", ignore = true) // Username will be generated in service
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "enabled", ignore = true) // Will be set to true in service
    @Mapping(target = "feedbacks", ignore = true)
    @Mapping(target = "tickets", ignore = true)
    User toEntity(RegisterRequest registerRequest);
}