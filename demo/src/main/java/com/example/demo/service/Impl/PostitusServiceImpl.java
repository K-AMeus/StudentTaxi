package com.example.demo.service.Impl;

import com.example.demo.exception.PostitusNotFoundException;
import com.example.demo.model.Postitus;
import com.example.demo.repository.PostitusRepository;
import com.example.demo.service.PostitusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class PostitusServiceImpl implements PostitusService {


    private final PostitusRepository postitusRepository;

    @Autowired
    public PostitusServiceImpl(PostitusRepository postitusRepository) {
        this.postitusRepository = postitusRepository;
    }



    @Override
    public String createPostitus(Postitus postitus) {
        // More business logic
        postitusRepository.save(postitus);
        return "Successfully saved";
    }

    @Override
    public String updatePostitus(Postitus postitus) {
        postitusRepository.save(postitus);
        return "Successfully updated";
    }


    @Override
    public String deletePostitus(int id) {
        if (postitusRepository.existsById(id)) {
            postitusRepository.deleteById(id);
            return "Postitus details deleted successfully";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Postitus with nimi " + id + " not found");
        }
    }

    @Override
    public Postitus getPostitus(int id) {
        if(postitusRepository.findById(id).isEmpty()){
            throw new PostitusNotFoundException("Requested postitus does not exist");
        }
        return postitusRepository.findById(id).get();
    }

    @Override
    public List<Postitus> getAllPostitused() {
        return postitusRepository.findAll();
    }
}
