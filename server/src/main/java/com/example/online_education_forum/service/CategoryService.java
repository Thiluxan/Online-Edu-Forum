package com.example.online_education_forum.service;

import com.example.online_education_forum.model.Category;
import com.example.online_education_forum.repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryRepo categoryRepo;

    public void addCategory(Category category){
        categoryRepo.save(category);
    }

    public List<Category> getCategories(){
        List<Category> categoryList = new ArrayList<>();
        categoryRepo.findAll().forEach(categoryList::add);
        return categoryList;
    }

    public Category getCategory(String category){
        return categoryRepo.findByCategoryCode(category);
    }
}
