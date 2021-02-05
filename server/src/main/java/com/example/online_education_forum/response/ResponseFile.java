package com.example.online_education_forum.response;

public class ResponseFile {

    private String name;
    private String author;
    private String description;
    private String url;
    private String type;
    private long size;

    public ResponseFile() {
    }

    public ResponseFile(String name, String author, String description, String url, String type, long size) {
        this.name = name;
        this.author = author;
        this.description = description;
        this.url = url;
        this.type = type;
        this.size = size;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public long getSize() {
        return size;
    }

    public void setSize(long size) {
        this.size = size;
    }
}
