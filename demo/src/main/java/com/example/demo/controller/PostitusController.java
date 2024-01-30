package com.example.demo.controller;

import com.example.demo.model.Postitus;
import com.example.demo.response.ResponseHandler;
import com.example.demo.service.PostitusService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/postitused")
public class PostitusController {

    PostitusService postitusService;

    public PostitusController(PostitusService postitusService) {
        this.postitusService = postitusService;
    }

    // Read specific postitus details from DB
    @GetMapping("{nimi}")
    public ResponseEntity<Object> getPostDetails(@PathVariable("nimi") String nimi){
        return ResponseHandler.responseBuilder("Requested postituse details are given here", HttpStatus.OK, postitusService.getPostitus(nimi) );
    }

    // Read all postitus details from DB
    @GetMapping
    public List<Postitus> getAllPostDetails(){
        return postitusService.getAllPostitused();

    }

    @PostMapping
    public String createPostDetails(@RequestBody Postitus postitus){
        postitusService.createPostitus(postitus);
        return "Post success";
    }

    @PutMapping
    public String updatePostDetails(@RequestBody Postitus postitus){
        postitusService.updatePostitus(postitus);
        return "Post details updated successfully";
    }

    @DeleteMapping("{nimi}")
    public String deletePostDetails(@PathVariable("nimi") String nimi){
        postitusService.deletePostitus(nimi);
        return "post details deleted successfully";
    }





}
