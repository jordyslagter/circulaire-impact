% ------------------------------------------------------------------------------
% Zuyd facility management
% Document style converted to TeX by Jordy Slagter
% ------------------------------------------------------------------------------

\ProvidesClass{zuydfacilitymanagement}

\newif\ifzfm@fontslocal
\DeclareOption{fontslocal}{\zfm@fontslocaltrue}

\DeclareOption*{\PassOptionsToClass{\CurrentOption}{book}}
\ProcessOptions\relax
\LoadClass[a4paper, oneside, 11pt]{book}

\RequirePackage[a4paper, heightrounded, margin=2.5cm]{geometry}
\RequirePackage[dutch]{babel}
\RequirePackage[hidelinks]{hyperref}

% set up book-style alignment
\RequirePackage{microtype}
% prefer stretching over overfilling
\setlength{\emergencystretch}{2em}
\tolerance=1000
% allow the end of a paragraph to be left aligned
\setlength{\parfillskip}{0pt plus 2fil}

% ------------------------------------------------------------------------------
% Set correct options
% ------------------------------------------------------------------------------
% citations
\RequirePackage{csquotes} % biblatex dependency
\RequirePackage[style=apa]{biblatex}
\addbibresource{bibliography.bib}

% maths
\RequirePackage{amsmath}
\RequirePackage{amssymb}
\RequirePackage{amsthm}

% figures
\RequirePackage{graphicx}
\RequirePackage{tikz}
\RequirePackage{pgfplotstable}
\pgfplotsset{compat=newest}
% use EU delimiters on plots
\pgfplotsset{/pgf/number format/use comma}

% set correct font
\RequirePackage{iftex}

\ifXeTeX
  \RequirePackage{fontspec}
  \ifzfm@fontslocal
    \defaultfontfeatures{Path = ./fonts/ }
    \setmainfont{AvenirNextLTPro}[
      Path=./fonts/,
      UprightFont = *-Regular,
      BoldFont    = *-Bold,
      ItalicFont  = *-It,
    ]
  \else
    \setmainfont{Avenir Next LT Pro}
  \fi
\else\ifLuaTeX
  \RequirePackage{fontspec}
  \ifzfm@fontslocal
    \defaultfontfeatures{Path = ./fonts/ }
    \setmainfont{AvenirNextLTPro}[
      Path=./fonts/,
      UprightFont = *-Regular,
      BoldFont    = *-Bold,
      ItalicFont  = *-It,
    ]
  \else
    \setmainfont{Avenir Next LT Pro}
  \fi
\else
  \PackageError{circulaireimpact}{
    This class requires XeLaTeX or LuaLaTeX
  }{Please compile with xelatex or lualatex.}
\fi\fi

% ------------------------------------------------------------------------------
% Cover and title page
% ------------------------------------------------------------------------------

% cover and title pages
\RequirePackage{pagecolor}
\RequirePackage{xcolor}
\RequirePackage{etoolbox}
\RequirePackage{tabularx}


\newcommand{\@cover}{}
\newcommand{\cover}[1]{\gdef\@cover{#1}}

\renewcommand{\@title}{}
\renewcommand{\title}[1]{\gdef\@title{#1}}

\newcommand{\@subtitle}{}
\newcommand{\subtitle}[1]{\gdef\@subtitle{#1}}

\newcommand{\@academicyear}{}
\newcommand{\academicyear}[1]{\gdef\@academicyear{#1}}

\newcommand{\@groupname}{}
\newcommand{\groupname}[1]{\gdef\@groupname{#1}}

% Storage macro for authors
\newcommand{\@authorslist}{}
% User command to add authors
\newcommand{\authors}[1]{\gdef\@authorslist{#1}}
% Command to define each entry
\newcommand{\authorentry}[2]{#1 & #2 \\}

\newcommand{\@client}{}
\newcommand{\client}[1]{\gdef\@client{#1}}

\newcommand{\@professor}{}
\newcommand{\professor}[1]{\gdef\@professor{#1}}

\newcommand{\@background}{}
\newcommand{\background}[1]{\gdef\@background{#1}}

\newcommand{\@place}{}
\newcommand{\place}[1]{\gdef\@place{#1}}

\renewcommand{\@date}{}
\renewcommand{\date}[1]{\gdef\@date{#1}}

% Print authors in tabular
\newcommand{\printauthors}{
  \begin{tabular}{@{}l @{\hspace{2em}} l@{}}
    \@authorslist
  \end{tabular}
}

% front matter uses lowercase roman numerals, but we want CAPITALS
\renewcommand{\thepage}{\Roman{page}}

\let\oldfrontmatter\frontmatter
% front matter uses Roman numerals starting from I
\renewcommand{\frontmatter}{
  \cleardoublepage
  \oldfrontmatter
  \pagenumbering{Roman}
  \setcounter{page}{1}
}

\let\oldmainmatter\mainmatter
% main matter uses Arabic numerals starting from 1
\renewcommand{\mainmatter}{
  \cleardoublepage
  \oldmainmatter
  \pagenumbering{arabic}
  \setcounter{page}{1}
}

% command to make a cover page
\newcommand{\makecover}{
  \begin{titlepage}
    \setlength{\parindent}{0pt}
    \setlength{\leftskip}{0pt}
    \setlength{\rightskip}{0pt}

    \ifdefempty{\@cover}{
      % IF USER DIDN'T DEFINE OWN COVER
      \centering
      \pagecolor{blue}
      \color{white}

      \vspace*{5cm}
      {\Huge \bfseries \@title \par}
      \vspace{2cm}
      {\LARGE \@subtitle \par}
      \vspace*{\fill}
      {\Large Zuyd Hogeschool \par}
    }{
        % IF USER DID DEFINE OWN COVER
        \@cover
    }

    \newpage
    \nopagecolor
  \end{titlepage}
}

% command to make a title page
\renewcommand{\maketitle}{
  \newcommand{\titlespace}{\vspace{0.5cm}}

  \begin{titlepage}
    % make this page display a page number as required by the document style
    \thispagestyle{plain}
    \setlength{\parindent}{0pt}
    \setlength{\leftskip}{0pt}
    \setlength{\rightskip}{0pt}

    \vspace*{5cm}
    {
      \centering
      {\Huge \@title \par}
      \vspace{2cm}
      {\LARGE \@subtitle \par}
    }

    \vspace*{\fill}
    \ifdefempty{\@academicyear}{}{
      Studiejaar \@academicyear \par\titlespace
    }
    \ifdefempty{\@groupname}{}{
      {\bfseries \@groupname \par}\titlespace
    }
    \ifdefempty{\@authorslist}{}{
      \printauthors \par\titlespace
    }
    \ifdefempty{\@client}{}{
      \@client \par\titlespace
    }
    \ifdefempty{\@professor}{}{
      \@professor \par\titlespace
    }
    \ifdefempty{\@background}{}{
      \@background \par\titlespace
    }
    \ifdefempty{\@place}{}{
      \@place\ifstrempty{\@date}{}{, \@date}\par
    }
  \end{titlepage}
  % manually increment the page number because tex doesn't do this itself for
  % title pages
  \stepcounter{page}
}

% ------------------------------------------------------------------------------
% Contentful pages
% ------------------------------------------------------------------------------

\RequirePackage{fancyhdr}
\fancyhf{}
\renewcommand{\headrulewidth}{0pt}  % removes the top header line
\renewcommand{\footrulewidth}{0pt}  % removes the bottom footer line

\fancyfoot[C]{\thepage}

\setlength{\headheight}{14pt}  % slightly bigger than the minimum
\fancyhead[L]{\nouppercase{\leftmark}}
\fancyhead[R]{\nouppercase{\rightmark}}

% Make chapter-opening pages (plain style) behave the same, except for not
% having a header
\fancypagestyle{plain}{
  \fancyhf{}
  \renewcommand{\headrulewidth}{0pt}  % removes the top header line
  \renewcommand{\footrulewidth}{0pt}  % removes the bottom footer line
  \fancyfoot[C]{\thepage}
  \renewcommand{\headrulewidth}{0pt}
  \renewcommand{\footrulewidth}{0pt}
}

\pagestyle{fancy}

% ------------------------------------------------------------------------------
% Misc. pages
% ------------------------------------------------------------------------------

% rename 'Inhoudsopgave' to 'Inhoud' as required by the document style
\addto\captionsdutch{
  \renewcommand{\contentsname}{Inhoud}
}

\DefineBibliographyStrings{dutch}{
  bibliography = {Bronnen},
}
% add it to the table of contents, as required by the document style
\defbibheading{bibliography}[\bibname]{
  \chapter*{#1}
  \addcontentsline{toc}{chapter}{#1}
}

\let\oldappendix\appendix
\renewcommand{\appendix}{%
  \cleardoublepage
  % Make page a title page style
  \thispagestyle{plain}
  % Add to TOC and create a hyperlink anchor
  \phantomsection
  \addcontentsline{toc}{chapter}{Bijlagen}

  % Centered "Bijlagen" text
  {
    \centering
    \vspace*{\fill}
    {\Huge \bfseries Bijlagen\par}
    \vspace*{\fill}
    \cleardoublepage
  }

  % Call original appendix to switch numbering
  \oldappendix
}

% ------------------------------------------------------------------------------
% Quality of life
% ------------------------------------------------------------------------------

% command to generate a blank page (ironic, i know)
\newcommand{\blankpage}{\shipout\null}

\newcommand{\makecoverandtitle}{
  \makecover
  \blankpage
  \frontmatter
  \maketitle
}

\newcommand{\unnumberedchapter}[1]{%
  \chapter*{#1}
  \addcontentsline{toc}{chapter}{#1}%
  \phantomsection
  \markboth{#1}{}% updates \leftmark for fancyhdr
}

\newcommand{\notocchapter}[1]{
  \chapter*{#1}
  \phantomsection
  \markboth{#1}{}% updates \leftmark for fancyhdr
}

\endinput
