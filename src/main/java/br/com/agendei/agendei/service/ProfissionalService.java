package br.com.agendei.agendei.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.agendei.agendei.models.Profissional;
import br.com.agendei.agendei.repository.ProfissionalRepository;

@Service
public class ProfissionalService {

	
	@Autowired
	ProfissionalRepository repository;
	
	public void salvarProfissional(@RequestBody Profissional profissional) {
		repository.save(profissional);
	}
	
}
