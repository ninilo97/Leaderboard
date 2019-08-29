package com.lti.service;

import javax.annotation.Resource;

import com.lti.entity.CardEntity;

@Resource
public interface LeaderboardService {
	public void addCard(CardEntity card);
}
