package com.eventopia.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class QRCodeRequest {
    private String text;
    private Integer width = 300;
    private Integer height = 300;
}