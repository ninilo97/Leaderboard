package com.lti.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lti.dao.LeaderboardDao;
import com.lti.entity.CardEntity;

@Service
public class LeaderboardServiceImpl implements LeaderboardService{
	
	@Autowired
	private LeaderboardDao dao;
	
	@Transactional
	public void addCard(CardEntity card){
		dao.save(card);
	}

	public List<CardEntity> fetchCard() {
		return dao.fetchCard(LocalDate.now());
	}

	public List<CardEntity> fetchAllCard() {
		return dao.fetchAllCard();
	}
}
