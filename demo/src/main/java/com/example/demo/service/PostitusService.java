package com.example.demo.service;

import com.example.demo.model.Postitus;

import java.util.List;

public interface PostitusService {
    public String createPostitus(Postitus postitus);
    public String updatePostitus(Postitus postitus);
    public String deletePostitus(int id);
    public Postitus getPostitus(int id);
    public List<Postitus> getAllPostitused();
}
