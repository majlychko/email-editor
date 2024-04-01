import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
  @Input() code = '';

  formattedCode = '';


  ngOnChanges(changes: SimpleChanges) {
    (async () => {
      const beautify = await import('js-beautify')
      this.formattedCode = beautify.default.html(this.prefix + changes['code'].currentValue + this.suffix, {})
    })().catch(console.error)

  }

  prefix = `
  <html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <title>Тинькофф</title>

    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i"
        rel="stylesheet">
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i');
        @import url('http://dev.tinc.by/tinkoff/fonts/sf/stylesheet.css');

        :root {
            color-scheme: light dark;
            supported-color-schemes: light dark;
        }

        td,
        a,
        p,
        span {
            word-wrap: normal;
            word-break: normal;
            hyphens: none;
            font-family: 'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif !important;
        }

        .bullet {
            line-height: 21px !important;
        }

        .btnBack:hover {
            background-color: #fcc521;
        }

        .btn:hover {
            background-color: #E4EBF3;
        }

        @media only screen and (min-width: 600px) {
            .tableItem {
                display: inline-block !important;
                width: 50% !important;
                vertical-align: top !important;
                -webkit-box-sizing: border-box !important;
                -moz-box-sizing: border-box !important;
                box-sizing: border-box !important;
                padding-right: 22px !important;
            }

            .tableNoBackItem {
                display: inline-block !important;
                width: 50% !important;
                vertical-align: top !important;
                -webkit-box-sizing: border-box !important;
                -moz-box-sizing: border-box !important;
                box-sizing: border-box !important;
                padding-left: 12px !important;
                padding-right: 12px !important;
            }
        }

        @media only screen and (max-width: 375px) {

            .btn,
            .btnBack {
                max-width: 100% !important;
            }
        }

        @media (prefers-color-scheme: dark) {
            .bodyTable {
                background-color: #404041 !important;
            }

            .contentTable {
                background-color: #333333 !important;
            }

            .textColor1 {
                color: #ffffff !important;
            }

            .textColor2 {
                color: #adadad !important;
            }

            .textColor3 {
                color: #8d8d8e !important;
            }

            .link {
                color: #336fee !important;
            }

            .line {
                background-color: #6D6F71 !important;
            }

            .accentBlock {
                background-color: #3c4149 !important;
            }

            .alarmBlock {
                background-color: #48453e !important;
            }

            .accentBorder {
                background-color: #6d6f71 !important;
            }

            .promoAccentBlock {
                background-color: #404041 !important;
            }

            .blockBack {
                background-color: #404041 !important;
            }

            .statDown {
                color: #f54444 !important;
            }

            .statUp {
                color: #00b92d !important;
            }

            .btn {
                color: #428bf9 !important;
                background-color: #3c4149 !important;
            }

            .btnBack {
                background-color: #ffdd2d !important;
                color: #333333 !important;
            }
        }

        [data-ogsc] .bodyTable {
            background-color: #404041 !important;
        }

        [data-ogsc] .contentTable {
            background-color: #333333 !important;
        }

        [data-ogsc] .textColor1 {
            color: #ffffff !important;
        }

        [data-ogsc] .textColor2 {
            color: #adadad !important;
        }

        [data-ogsc] .textColor3 {
            color: #8d8d8e !important;
        }

        [data-ogsc] .link {
            color: #336fee !important;
        }

        [data-ogsc] .line {
            background-color: #6D6F71 !important;
        }

        [data-ogsc] .accentBlock {
            background-color: #3c4149 !important;
        }

        [data-ogsc] .alarmBlock {
            background-color: #48453e !important;
        }

        [data-ogsc] .accentBorder {
            background-color: #6d6f71 !important;
        }

        [data-ogsc] .promoAccentBlock {
            background-color: #404041 !important;
        }

        [data-ogsc] .blockBack {
            background-color: #404041 !important;
        }

        [data-ogsc] .statDown {
            color: #f54444 !important;
        }

        [data-ogsc] .statUp {
            color: #00b92d !important;
        }

        [data-ogsc] .btn {
            color: #428bf9 !important;
            background-color: #3c4149 !important;
        }

        [data-ogsc] .btnBack {
            background-color: #ffdd2d !important;
            color: #333333 !important;
        }
    </style>

    <!--[if mso]>
    <style type="text/css">
        td,a,p,span{
            font-family: Arial, sans-serif !important;
        }
    </style>
    <![endif]-->
</head>

<body style="margin:0;padding:0;">
    <table class="bodyTable" border="0" cellpadding="0" cellspacing="0" bgcolor="#f5f6f7" width="100%"
        style="border-collapse:collapse;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;-moz-text-size-adjust:none;word-wrap:normal;word-break:normal;hyphens:none;">
        <tr>
            <td align="center" style="padding-bottom:48px;">
                <!-- start: empty preheader -->
                <!--[if !mso]><!-->
                <div class="preheader" style="font-size:0px;color:transparent;opacity:0;"></div>
                <div class="preheader" style="font-size:0px;color:transparent;opacity:0;">
                    &#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240; 
                </div>
                <!--<![endif]-->
                <!-- end: empty preheader -->

                <!--[if gte mso 9]>
                <table border="0" cellpadding="0" cellspacing="0" width="600">
                    <tr>
                        <td>
                <![endif]-->
                <table class="contentTable" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff"
                    style="width:100%;max-width:600px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;">
                    <tr>
                        <td align="center" style="padding:0 20px;">
                            <!--[if gte mso 9]>
                            <table border="0" cellpadding="0" cellspacing="0" width="536">
                                <tr>
                                    <td>
                            <![endif]-->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="width:100%;max-width:536px;">

                                <!-- start: header -->
                                <tr>
                                    <td style="padding:20px 0 16px;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">

  `

  suffix = `
  </table>
                                    </td>
                                </tr>
                            </table>
                            <!--[if gte mso 9]>
                                    </td>
                                </tr>
                            </table>
                            <![endif]-->
                        </td>
                    </tr>
                </table>
                <!--[if gte mso 9]>
                        </td>
                    </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
    </table>
</body>

</html>
`
}
