package br.com.agendei.agendei.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.agendei.agendei.models.Profissional;
import br.com.agendei.agendei.repository.ProfissionalRepository;

@Service
public class ProfissionalService {

	@Autowired
	private ProfissionalRepository repository;
	
	public Profissional salvarProfissional(@RequestBody Profissional profissional) {
		return repository.save(profissional);
	}
	
	public List<Profissional> lista() {
		return repository.findAll();
	}

}
