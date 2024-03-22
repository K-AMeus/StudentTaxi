package com.example.demo.controller;

import com.example.demo.model.Postitus;
import com.example.demo.response.ResponseHandler;
import com.example.demo.service.PostitusService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/postitused")
public class PostitusController {

    PostitusService postitusService;

    public PostitusController(PostitusService postitusService) {
        this.postitusService = postitusService;
    }

    // Read specific postitus details from DB
    @GetMapping("{id}")
    public ResponseEntity<Object> getPostDetails(@PathVariable("id") int id){
        return ResponseHandler.responseBuilder("Requested postituse details are given here", HttpStatus.OK, postitusService.getPostitus(id) );
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

    @DeleteMapping("{id}")
    public String deletePostDetails(@PathVariable("id") int id){
        postitusService.deletePostitus(id);
        return "post details deleted successfully";
    }





}
