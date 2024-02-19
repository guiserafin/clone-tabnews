function status(request, response) {
  response
    .status(200)
    .json({ msg: "Alunos do curso.dev são pessoas acima da média" });
}

export default status;
