package com.eventopia.service;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.util.Base64;

@Service
@Slf4j
public class QRCodeService {


    public byte[] generateQRCodeImage(String text, int width, int height) {
        try {
            QRCodeWriter qrCodeWriter = new QRCodeWriter();
            BitMatrix bitMatrix = qrCodeWriter.encode(text, BarcodeFormat.QR_CODE, width, height);

            ByteArrayOutputStream pngOutputStream = new ByteArrayOutputStream();
            BufferedImage bufferedImage = MatrixToImageWriter.toBufferedImage(bitMatrix);
            ImageIO.write(bufferedImage, "PNG", pngOutputStream);

            return pngOutputStream.toByteArray();
        } catch (WriterException | IOException e) {
            log.error("Error generating QR code", e);
            throw new RuntimeException("Failed to generate QR code", e);
        }
    }


    public String generateQRCodeBase64(String text, int width, int height) {
        byte[] imageBytes = generateQRCodeImage(text, width, height);
        return Base64.getEncoder().encodeToString(imageBytes);
    }


    public String saveQRCodeToFile(String text, int width, int height, String filePath) {
        try {
            QRCodeWriter qrCodeWriter = new QRCodeWriter();
            BitMatrix bitMatrix = qrCodeWriter.encode(text, BarcodeFormat.QR_CODE, width, height);

            Path path = FileSystems.getDefault().getPath(filePath);
            MatrixToImageWriter.writeToPath(bitMatrix, "PNG", path);

            return path.toString();
        } catch (Exception e) {
            log.error("Error saving QR code to file", e);
            throw new RuntimeException("Failed to save QR code to file", e);
        }
    }


    public String generateEventTicketQRCode(Long eventId, Long userId, String ticketCode) {
        String qrContent = String.format(
                "EVENT_TICKET:%s:%s:%s:%s",
                eventId,
                userId,
                ticketCode,
                System.currentTimeMillis() // Add timestamp for uniqueness
        );
        return generateQRCodeBase64(qrContent, 300, 300);
    }


    public String generateEventDetailsQRCode(Long eventId, String eventName) {
        String qrContent = String.format(
                "EVENT_DETAILS:%s:%s",
                eventId,
                eventName.replaceAll("[^a-zA-Z0-9]", "-")
        );
        return generateQRCodeBase64(qrContent, 250, 250);
    }
}