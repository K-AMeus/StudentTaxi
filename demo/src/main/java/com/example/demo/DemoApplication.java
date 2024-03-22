package com.example.demo;

import com.example.demo.model.Postitus;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		Postitus postitus1 = new Postitus(1, "Meus", "trt-tln", "01-01-24", "15:30");
		SpringApplication.run(DemoApplication.class, args);
	}


}
