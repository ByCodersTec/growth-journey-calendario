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
import br.com.agendei.agendei.service.ProfissionalService;

@RestController
@RequestMapping(value = "/api/profissional")
public class ProfissionalController {

//	@GetMapping
//	public List<Profissional> list() throws IOException {
//		
//	}

	@PostMapping
	public void salvarCadastroProfissional(Profissional profissional) {
		ProfissionalService cadastroProfissional = new ProfissionalService();
		cadastroProfissional.salvarProfissional(profissional);

	}

}
