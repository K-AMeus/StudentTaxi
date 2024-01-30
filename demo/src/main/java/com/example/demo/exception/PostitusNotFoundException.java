package com.example.demo.exception;

public class PostitusNotFoundException extends RuntimeException{
    public PostitusNotFoundException(String message) {
        super(message);
    }

    public PostitusNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
