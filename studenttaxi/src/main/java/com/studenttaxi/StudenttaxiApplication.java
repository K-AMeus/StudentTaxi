package com.studenttaxi;

import com.studenttaxi.model.Postitus;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StudenttaxiApplication {

	public static void main(String[] args) {
		Postitus postitus1 = new Postitus(1, "Meus", "trt-tln", "01-01-24", "15:30");
		SpringApplication.run(StudenttaxiApplication.class, args);
	}


}
