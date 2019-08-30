package com.lti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.CardEntity;
import com.lti.service.LeaderboardService;

@RestController
public class LeaderboardController {

	@Autowired
	private LeaderboardService service;

	@SuppressWarnings("finally")
	@PostMapping("/addCard.lti")
	public boolean addCard(@RequestBody CardEntity card) {
		boolean flag=false;
		try {
			service.addCard(card);
			flag=true;
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			return flag;
		}
	}

	@SuppressWarnings("finally")
	@PostMapping("/fetchCards.lti")
	public List<CardEntity> fetchCard() {
		return service.fetchCard();
	}
	
	@SuppressWarnings("finally")
	@PostMapping("/fetchAllCard.lti")
	public List<CardEntity> fetchAllCard() {
		return service.fetchAllCard();
	}
}
