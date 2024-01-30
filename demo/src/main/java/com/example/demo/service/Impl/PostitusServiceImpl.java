package com.example.demo.service.Impl;

import com.example.demo.exception.PostitusNotFoundException;
import com.example.demo.model.Postitus;
import com.example.demo.repository.PostitusRepository;
import com.example.demo.service.PostitusService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostitusServiceImpl implements PostitusService {


    PostitusRepository postitusRepository;

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
    public String deletePostitus(String nimi) {
        postitusRepository.deleteById(nimi);
        return "Successfully deleted";
    }

    @Override
    public Postitus getPostitus(String nimi) {
        if(postitusRepository.findById(nimi).isEmpty()){
            throw new PostitusNotFoundException("Requested postitus does not exist");
        }
        return postitusRepository.findById(nimi).get();
    }

    @Override
    public List<Postitus> getAllPostitused() {
        return postitusRepository.findAll();
    }
}
