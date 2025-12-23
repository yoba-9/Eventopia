package com.eventopia.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class QRCodeResponse {
    private String qrCodeBase64;
    private String message;
    private String text;
}