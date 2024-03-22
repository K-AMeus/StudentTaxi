package com.studenttaxi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class PostitusExceptionHandler {

    @ExceptionHandler(value = {PostitusNotFoundException.class})
    public ResponseEntity<Object> handlePostitusNotFoundException(PostitusNotFoundException postitusNotFoundException){

        PostitusException postitusException = new PostitusException(postitusNotFoundException.getMessage(),
                postitusNotFoundException.getCause(), HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(postitusException, HttpStatus.NOT_FOUND);
    }
}
