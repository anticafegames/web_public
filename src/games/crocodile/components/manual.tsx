import React from 'react'

import Styled from '../../../components/games/select-game/manuals/manual/manual-slyled'

const Manual: React.FC = () => {

    return (
        <Styled className=''>

            <h5>Игра «Крокодил»</h5>
            Бессмертная классика настольных игр. Возможно, она не столь запутанная и зрелищная, как другие настольные игры с жетонами и карточками, но зато в неё можно играть где угодно, когда угодно и в большой компании.
            В отличие от сложных настольных RPG, игра «Крокодил» требует одного — фантазии и умения жестикулировать.

            <h5>Описание</h5>

            Словесная игра «Крокодил» на Западе известна как « Шарады » или «Пантомима».

            <br />
            Загадывается слово, словосочетание или фраза.
            Один из игроков должен показать загаданное без слов, лишь только жестами, мимикой, и позами, т.е пантомимой.

            <br />
            Игроки делятся на команды.
            За определенный промежуток времени игрок должен изобразить значение этого задания так, чтобы его команда смогла угадать заданное слово или фразу.
            Если справились — получили очко, и теперь очередь следующей команды угадывать. И так — пока не надоест!

            <h5>Правила игры</h5>

            1. Игрок показывает слово, используя только мимику, жесты, движения. 
            Ему запрещается произносить слова (любые, даже «да», «нет» и т.п.) и звуки, особенно те, по которым легко угадать слово (например, по звуку «мяу» можно легко догадаться, что загадана кошка).
            <br />
            2. Запрещается губами проговаривать слова.
            <br />
            3. Запрещается показывать загаданное слово по буквам, т.е. показывать слова, первые буквы которых будут складывать загаданное слово!
            <br />
            4. Отгадывающие могут: задавать игроку любые вопросы; просить игрока показать синонимы; перечислять любые появляющиеся варианты. Помните, что очень многое зависит от активности тех, кто отгадывает, от их умения задавать наиболее существенные вопросы.
            <br />
            5. Для показа слова или фразы отводится определенное время. Если правильный ответ не прозвучал до окончания этого срока, то слово считается не угаданным.
            <br />
            7. Слово считается разгаданным, если слово произнесено именно так, как оно было зага-дано (именно с теми же приставками, суффиксами и т.п.). Например, было загадано слово «солнышко» — в этом случае «солнце» будет неверным ответом.


            <h5>Специальные жесты</h5>

            Игрокам лучше всего заранее договориться о специальных жестах, обозначающих те или иные понятия. Например:

                <br />
                1. сначала игрок показывает на пальцах, сколько слов в задании, а затем начинает изображать любое слово (команда помогает игроку и спрашивает: «Это существительное?», «Это прилагательное?» и т.д.)
                <br />
                2. крест руками — «забудьте, показываю заново»
                <br />
                3. игрок показывает пальцем на одного из отгадывающих – он назвал наиболее близкое к разгадке слово
                <br />
                4. круговые или вращательные движения ладонью – «подбирайте синонимы», или «близко»
                <br />
                5. большой круг руками в воздухе — более широкое понятие или абстракция, связанное с загаданным словом
                <br />
                6. игрок хлопает в ладоши и делает волну одной рукой – нужно добавить к названному командой слову суффикс, корень слова назван правильно (милый – миленький, платье – платьице)
                <br />
                7. скрещенные пальцы — приставка «не»
                <br />
                8. игрок показывают пальцем за спину — глагол в прошедшем времени
                <br />
                9. игрок хлопает в ладоши – «ура, слово угадано верно» и т.д.

        </Styled>
    )
}

export default Manual

/*Каждый из участников (их может быть от 2-х до бесконечности) загадывает своему соседу имя любого культурного деятеля, исторического лица, персонажа любого художественного произведения или же какого-то локального деятеля, но обязательно известного всем участвующим в игре.
                После того, как вся подготовка окончена, всем загадали героев, начинается игра.
                Первым делом каждый должен ознакомиться с «ролями» своих коллег, чтобы с легкостью продолжать игру.
                Итак, когда все всё узнали и поняли, можно приступать к самой интересной части – вопросам.
                Выбирается человек, с которого будет начинаться круг: здесь нет определенного принципа.
                Вопрос нужно конструировать так, чтобы на него можно было ответить только «да» или «нет».
                Например, первый вопрос часто бывает подобного типа: «Я реально существующий персонаж?»
                И вся компания отвечает этому человеку: «Да» или «Нет». Отвечают обычно хором, поэтому если кто-то один или несколько людей не знает ответ на какой-то вопрос, ничего страшного не происходит.
                Итак, если человеку на его вопрос ответили «Да», он может продолжать расспрос, задавая следующий вопрос. Один человек играет до тех пор, пока на его вопрос не ответят «нет» или пока он не скажет «пасс». Взять «пасс» можно в том случае, если у вас нет подходящих вопросов или вы хотите обдумать ту информацию, которую вам уже дали.
                Каждый из игроков задает наводящие вопросы всей команде до тех пор, пока кто-то один не угадает, кем он на самом деле является.
                Например, человек, получив достаточную информацию и все обдумав, спрашивает «Я – Лермонтов?». Если ему отвечают «да», значит, он победил и он выходит из игры, но у него остается право отвечать на вопросы своих коллег. Если он ошибся, не угадал и ему ответили «нет», он продолжает игру вместе со всеми.
                Выдвигать конкретные предположения по поводу того, какую роль вам загадали, можно не больше трех раз. Если на третий раз вам ответили «нет», вы в качестве наказания пропускаете свой следующий ход.
                Когда остаются двое игроков, они соревнуются до тех пор, пока кто-то один не угадает своего героя. Тогда оставшемуся игроку дают три хода – то есть три раза ему могут ответить «нет», после третьего он считается проигравшим.*/