package com.a202.girinee.util;

import com.a202.girinee.dto.response.AiResponseDto;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;

public class FileUtil {
    private static final char[] CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".toCharArray();
    private static final String URL = "https://j7a202.p.ssafy.io/chords";

    public static String randomFileName() {
        StringBuilder fileName = new StringBuilder();
        for (int i = 0; i < 20; i++) {
            fileName.append(CHARS[(int) (Math.random() * CHARS.length)]);
        }
        return File.separator + "Sound" + File.separator + fileName + ".wav";
    }

    public static void fileSave(MultipartFile file, String uploadPath) {
        try {
            Path path = Paths.get(uploadPath);
            file.transferTo(path);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static AiResponseDto postAi(MultipartFile file, String chord) {
        String uploadPath = randomFileName();

        fileSave(file, uploadPath);

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("wav_path", uploadPath);
        body.add("answer", chord);

        HttpEntity<?> requestMessage = new HttpEntity<>(body, httpHeaders);
        ResponseEntity<AiResponseDto> response = restTemplate.postForEntity(URL, requestMessage, AiResponseDto.class);

        File deleteFile = new File(uploadPath);
        deleteFile.delete();

        return response.getBody();
    }
}
