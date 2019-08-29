package com.lti.controller;

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
		System.out.println(card.toString());
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
}
