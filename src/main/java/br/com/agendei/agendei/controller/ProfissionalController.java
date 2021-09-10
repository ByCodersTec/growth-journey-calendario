package br.com.agendei.agendei.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import br.com.agendei.agendei.models.Profissional;
import br.com.agendei.agendei.repository.ProfissionalRepository;




@RestController
@RequestMapping(value="/api/profissional")
public class ProfissionalController {
	
	@Autowired
	ProfissionalRepository repository;
	
	@GetMapping
	public List<Profissional> list() throws IOException{
		System.out.println("Listando banco de Profissionais");
		return repository.findAll();
	}
	
	@PostMapping
	public void salvar (@RequestBody Profissional profissional) {
		System.out.println("salvando Profissional "+ profissional.getNome());
		repository.save(profissional);
	}

}
