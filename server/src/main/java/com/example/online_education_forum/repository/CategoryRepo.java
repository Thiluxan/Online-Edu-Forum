package com.example.online_education_forum.repository;

import com.example.online_education_forum.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category, String> {
    Category findByCategoryCode(String category);
}
