package com.Ticketing.System;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class SystemApplication {

	public static void main(String[] args){
		SpringApplication.run(SystemApplication.class, args);
		System.out.println("*********************************************");
		System.out.println("*** REAL TIME EVENT TICKET BOOKING SYSTEM ***");
		System.out.println("*********************************************");
	}
	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

}
