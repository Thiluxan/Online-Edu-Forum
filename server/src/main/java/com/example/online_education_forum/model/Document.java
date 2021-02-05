package com.example.online_education_forum.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "documents")
public class Document {

    @Id
    private int id;
    private String name;
    private String type;
    @Lob
    private byte[] data;
    private String author;
    private String category;
    private String description;

    public Document() {
    }

    public Document(String name, String type, byte[] data, String author, String category, String description) {
        this.name = name;
        this.type = type;
        this.data = data;
        this.author = author;
        this.category = category;
        this.description = description;
    }

    public Document(int id, String name, String type, byte[] data, String author, String category, String description) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.data = data;
        this.author = author;
        this.category = category;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
