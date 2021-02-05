package com.example.online_education_forum.service;

import com.example.online_education_forum.model.Document;
import com.example.online_education_forum.repository.DocumentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.print.Doc;
import java.io.IOException;
import java.util.stream.Stream;

@Service
public class DocumentService {

    @Autowired
    DocumentRepo documentRepo;

    public Document saveDocument(MultipartFile file, String author, String category, String description) throws IOException {
        String documentName = StringUtils.cleanPath(file.getOriginalFilename());
        Document document = new Document(documentName,file.getContentType(),file.getBytes(),author,category,description);
        return documentRepo.save(document);
    }

    public Stream<Document> getAllFiles(String category){
        return documentRepo.findAllByCategory(category).stream();
    }

    public Document getDocument(int id){
        return documentRepo.findById(id).get();
    }

}
