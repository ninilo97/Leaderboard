package com.lti.dao;

import java.time.LocalDate;
import java.util.List;

import com.lti.entity.CardEntity;

public interface LeaderboardDao extends GenericDao{
	public List<CardEntity> fetchCard(LocalDate todaysDate);
	public List<CardEntity> fetchAllCard();
}
