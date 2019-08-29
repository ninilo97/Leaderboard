package com.lti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lti.dao.GenericDao;
import com.lti.entity.CardEntity;

@Service
public class LeaderboardServiceImpl implements LeaderboardService{
	
	@Autowired
	private GenericDao dao;
	
	@Transactional
	public void addCard(CardEntity card){
		dao.save(card);
	}
}
