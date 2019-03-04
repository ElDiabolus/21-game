$(function ()
{
    var intCurrentAmount = 0;
    var intClicked = 0;

    $('#erhoehen').click(function ()
    {
        if(intCurrentAmount < 21)
        {
            intCurrentAmount++;

            if (intClicked < 3)
            {
                intClicked++;

                var objUl = $('ul');
                var strHtml = objUl.html();
                objUl.html(strHtml + '<li class="you">Du: <span>' + intCurrentAmount + '</span></li>');

                if (intCurrentAmount == 21)
                {
                    strHtml = objUl.html();
                    objUl.html(strHtml + '<li class="winBot">Bot hat gewonnen!</li>');
                }
            }

            if (intClicked >= 3)
            {
                $('#ready').click();
            }
        }
    });

    $('#ready').click(function ()
    {
        if(intClicked != 0)
        {
            if(intCurrentAmount < 21)
            {
                intClicked = 0;
                generateData();
            }
        }
    });


    generateData();

    function generateData()
    {
        var intZahl = getRndInteger(1, 4);

        for (i = 0; i < intZahl; i++)
        {
            intCurrentAmount++;

            var objUl = $('ul');
            var strHtml = objUl.html();
            objUl.html(strHtml + '<li class="bot">Bot: <span>' + intCurrentAmount + '</span></li>');

            if (intCurrentAmount == 21)
            {
                strHtml = objUl.html();
                objUl.html(strHtml + '<li class="win">Du hast gewonnen!</li>');
                break;
            }
        }
    }

    function getRndInteger(min, max)
    {
        return Math.floor(Math.random() * (max - min)) + min;
    }
});