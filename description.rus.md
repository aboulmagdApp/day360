﻿##ДНЕЙ360

Возвращает количество дней между двумя датами на основе 360-дневного года (двенадцать 30-дневных месяцев). Эта функция используется для расчета платежей, если бухгалтерия основана на двенадцати 30-дневных месяцах.

###Синтаксис

ДНЕЙ360(нач_дата ; кон_дата ; метод)

Нач_дата и кон_дата    — это две даты, количество дней между которыми необходимо вычислить. Если нач_дата соответствует дате более поздней, чем кон_дата, функция возвращает отрицательное значение. Даты должны вводиться с использованием функции ДАТА или как результат других формул и функций. Например, следует использовать ДАТА(2008;5;23) для 23-го мая 2008 года. Проблемы могут возникнуть, если даты вводятся как текст.

Метод    — это логическое значение, которое определяет, какой метод, европейский или американский, должен использоваться при вычислениях

МЕТОД    ОПРЕДЕЛЕНИЕ
ЛОЖЬ или опущено Американский метод (NASD). Если начальная дата является 31-м числом месяца, то она полагается равной 30-ому числу того же месяца. Если конечная дата является 31-м числом месяца и начальная дата меньше, чем 30-ое число, то конечная дата полагается равной 1-ому числу следующего месяца, в противном случае конечная дата полагается равной 30-ому числу того же месяца.
ИСТИНА   Европейский метод. Начальная и конечная даты, которые приходятся на 31-ое число месяца, полагаются равными 30-ому числу того же месяца.
