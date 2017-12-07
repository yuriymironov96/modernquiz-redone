from lxml import objectify, etree


def parse_quiz(quiz_xml):
    parsed_quiz = {}
    objectified_xml = objectify.fromstring(quiz_xml)
    quiz = objectified_xml.quiz
    parsed_quiz['title'] = quiz.get('title')
    parsed_quiz['description'] = quiz.get('description')
    parsed_quiz['questions'] = []
    for question in quiz.question:
        parsed_question = {}
        parsed_question['body'] = question.get('text')
        parsed_question['type'] = question.get('type')
        parsed_question['answers'] = []
        for answer in question.answer:
            parsed_answer = {}
            parsed_answer['text'] = answer.get('text')
            parsed_answer['correct'] = (answer.get('correct') == 'true')
            parsed_question['answers'].append(parsed_answer)
        parsed_quiz['questions'].append(parsed_question)
    return parsed_quiz