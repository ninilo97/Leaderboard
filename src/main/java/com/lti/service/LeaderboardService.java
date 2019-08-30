package com.lti.service;

import java.util.List;

import javax.annotation.Resource;

import com.lti.entity.CardEntity;

@Resource
public interface LeaderboardService {
	public void addCard(CardEntity card);
	public List<CardEntity> fetchCard();
	public List<CardEntity> fetchAllCard();
}
