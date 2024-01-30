package com.example.demo.service;

import com.example.demo.model.Postitus;

import java.util.List;

public interface PostitusService {
    public String createPostitus(Postitus postitus);
    public String updatePostitus(Postitus postitus);
    public String deletePostitus(String nimi);
    public Postitus getPostitus(String nimi);
    public List<Postitus> getAllPostitused();
}
