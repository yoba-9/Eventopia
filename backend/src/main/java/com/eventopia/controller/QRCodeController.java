package com.eventopia.controller;

import com.eventopia.dto.QRCodeRequest;
import com.eventopia.dto.QRCodeResponse;
import com.eventopia.service.QRCodeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/qrcode")
@RequiredArgsConstructor
public class QRCodeController {

    private final QRCodeService qrCodeService;

    @PostMapping("/generate")
    public ResponseEntity<QRCodeResponse> generateQRCode(@RequestBody QRCodeRequest request) {
        String qrCodeBase64 = qrCodeService.generateQRCodeBase64(
                request.getText(),
                request.getWidth(),
                request.getHeight()
        );

        QRCodeResponse response = new QRCodeResponse(
                qrCodeBase64,
                "QR code generated successfully",
                request.getText()
        );

        return ResponseEntity.ok(response);
    }

    @GetMapping("/generate")
    public ResponseEntity<QRCodeResponse> generateQRCodeFromParam(
            @RequestParam String text,
            @RequestParam(defaultValue = "300") int width,
            @RequestParam(defaultValue = "300") int height) {

        String qrCodeBase64 = qrCodeService.generateQRCodeBase64(text, width, height);

        QRCodeResponse response = new QRCodeResponse(
                qrCodeBase64,
                "QR code generated successfully",
                text
        );

        return ResponseEntity.ok(response);
    }

    @GetMapping("/download")
    public ResponseEntity<byte[]> downloadQRCode(
            @RequestParam String text,
            @RequestParam(defaultValue = "300") int width,
            @RequestParam(defaultValue = "300") int height) {

        byte[] qrCodeImage = qrCodeService.generateQRCodeImage(text, width, height);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_PNG);
        headers.setContentDispositionFormData("attachment", "qrcode.png");

        return new ResponseEntity<>(qrCodeImage, headers, HttpStatus.OK);
    }

    @GetMapping("/event/{eventId}/ticket")
    public ResponseEntity<QRCodeResponse> generateEventTicketQRCode(
            @PathVariable Long eventId,
            @RequestParam Long userId,
            @RequestParam String ticketCode) {

        String qrCodeBase64 = qrCodeService.generateEventTicketQRCode(eventId, userId, ticketCode);

        QRCodeResponse response = new QRCodeResponse(
                qrCodeBase64,
                "Event ticket QR code generated successfully",
                String.format("Event: %s, User: %s, Ticket: %s", eventId, userId, ticketCode)
        );

        return ResponseEntity.ok(response);
    }

    @GetMapping("/event/{eventId}/details")
    public ResponseEntity<QRCodeResponse> generateEventDetailsQRCode(
            @PathVariable Long eventId,
            @RequestParam String eventName) {

        String qrCodeBase64 = qrCodeService.generateEventDetailsQRCode(eventId, eventName);

        QRCodeResponse response = new QRCodeResponse(
                qrCodeBase64,
                "Event details QR code generated successfully",
                String.format("Event: %s - %s", eventId, eventName)
        );

        return ResponseEntity.ok(response);
    }
}