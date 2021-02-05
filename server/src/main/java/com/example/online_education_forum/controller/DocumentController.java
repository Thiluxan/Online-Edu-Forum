package com.example.online_education_forum.controller;

import com.example.online_education_forum.model.Document;
import com.example.online_education_forum.response.ResponseFile;
import com.example.online_education_forum.response.ResponseMessage;
import com.example.online_education_forum.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.stream.Collectors;

@Controller
public class DocumentController {

    @Autowired
    DocumentService documentService;

    @PostMapping("/upload")
    public ResponseEntity<ResponseMessage> uploadDocument
            (@RequestParam("file") MultipartFile file,
             @RequestParam("author") String author,
             @RequestParam("category") String category,
             @RequestParam("description") String description){
        String message = "";
        try {
            documentService.saveDocument(file,author,category,description);

            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }

    @GetMapping("/{category}/documents")
    public ResponseEntity<List<ResponseFile>> getListFiles(@PathVariable String category) {
        List<ResponseFile> files = documentService.getAllFiles(category).map(dbFile -> {
            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/documents/")
                    .path(String.valueOf(dbFile.getId()))
                    .toUriString();

            return new ResponseFile(
                    dbFile.getName(),
                    dbFile.getAuthor(),
                    dbFile.getDescription(),
                    fileDownloadUri,
                    dbFile.getType(),
                    dbFile.getData().length);
        }).collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.OK).body(files);
    }


    @GetMapping("/documents/{id}")
    public ResponseEntity<byte[]> getSingleDocument(@PathVariable int id){
        Document document = documentService.getDocument(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + document.getName() + "\"")
                .body(document.getData());
    }

}
