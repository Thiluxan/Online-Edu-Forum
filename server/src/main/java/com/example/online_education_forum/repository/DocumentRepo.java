package com.example.online_education_forum.repository;

import com.example.online_education_forum.model.Document;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.stream.Stream;

public interface DocumentRepo extends JpaRepository<Document, Integer> {

    List<Document> findAllByCategory(String category);

    Document findByIdAndCategory(int id, String category);
}
