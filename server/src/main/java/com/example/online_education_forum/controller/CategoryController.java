package com.example.online_education_forum.controller;

import com.example.online_education_forum.model.Category;
import com.example.online_education_forum.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @PostMapping("/addCategory")
    public void addCategory(@RequestBody Category category){
        categoryService.addCategory(category);
    }

    @GetMapping("/categories")
    public List<Category> getCategories(){
        return categoryService.getCategories();
    }

    @GetMapping("/categories/{category}")
    public String getCategory(@PathVariable String category){
        return categoryService.getCategory(category).getCategoryName();
    }
}
