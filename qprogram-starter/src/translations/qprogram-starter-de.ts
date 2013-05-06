<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="de">
<context>
    <name>Gui</name>
    <message>
        <source>HH:mm:ss</source>
        <translation>HH:mm:ss</translation>
    </message>
    <message>
        <source>dddd dd.MM.yyyy</source>
        <translation>dddd dd.MM.yyyy</translation>
    </message>
    <message>
        <source>Sho&amp;w Logs</source>
        <translation>&amp;zeige Protokolle</translation>
    </message>
    <message>
        <source>S&amp;hutdown</source>
        <translation>Sh&amp;utdown</translation>
    </message>
    <message>
        <source>&amp;Hints</source>
        <translation>&amp;Hinweise</translation>
    </message>
    <message>
        <source>Quits qprogram-starter when the last command finished</source>
        <translation>Beendet qprogram-starter wenn der letzte Befehl fertig ist</translation>
    </message>
    <message>
        <source>&amp;Quit with last command</source>
        <translation>Mit dem letzten &amp;Befehl beenden</translation>
    </message>
    <message>
        <source>&amp;Logging</source>
        <translation>&amp;Protokollieren</translation>
    </message>
    <message>
        <source>Shutdown the computer after all commands finished</source>
        <translation>Schalte den Computer ab nachdem alle Befehle fertig sind</translation>
    </message>
    <message>
        <source>The contents will be restored on every start of qprogram-starter</source>
        <translation>Die Inhalte werden bei jedem Start von qprogram-starter wiederhergestellt</translation>
    </message>
    <message>
        <source>&amp;Start</source>
        <translation>&amp;Start</translation>
    </message>
    <message>
        <source>&amp;Abort</source>
        <translation>&amp;Abbrechen</translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation>Durchsuchen...</translation>
    </message>
    <message>
        <source>Save text editors &amp;contents</source>
        <translation>Speichere &amp;Inhalte der Texteditoren</translation>
    </message>
    <message>
        <source>Start the commands to this time and date</source>
        <translation>Starte die Befehle zu diesem Termin</translation>
    </message>
    <message>
        <source>A&amp;t date and time:</source>
        <translation>&amp;Zu Datum und Uhrzeit:</translation>
    </message>
    <message>
        <source>Select a program</source>
        <translation>Wähle ein Programm</translation>
    </message>
    <message>
        <source>The first text edit is empty!</source>
        <translation>Der erste Texteditor ist leer!</translation>
    </message>
    <message>
        <source>Information</source>
        <translation>Information</translation>
    </message>
    <message>
        <source>Processes aborted</source>
        <translation>Prozesse abgebrochen</translation>
    </message>
    <message>
        <source>&lt;b&gt;process 1 finished!&lt;/b&gt;</source>
        <translation>&lt;b&gt;Prozess 1 fertig!&lt;/br&gt;</translation>
    </message>
    <message>
        <source>&lt;b&gt;process 1 &amp; 2 finished!&lt;/b&gt;</source>
        <translation>&lt;b&gt;Prozess 1 &amp; 2 fertig!&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Fehler</translation>
    </message>
    <message>
        <source>&lt;b&gt;Failed to start!&lt;/b&gt;&lt;br/&gt;No such program or command.</source>
        <translation>&lt;b&gt;Start fehlgeschlagen!&lt;/b&gt;&lt;br/&gt;Unbekannter Befehl oder unbekanntes Programm.</translation>
    </message>
    <message>
        <source>&lt;b&gt;process 1 crashed!&lt;/b&gt;&lt;br/&gt;This could be caused by invalid parameters or options.</source>
        <translation>&lt;b&gt;Prozess 1 abgestürzt!&lt;/b&gt;&lt;br/&gt;Dies könnte durch unzulässige Parameter oder Optionen verursacht worden sein.</translation>
    </message>
    <message>
        <source>&lt;b&gt;process 2 crashed!&lt;/b&gt;&lt;br/&gt;This could be caused by invalid parameters or options.</source>
        <translation>&lt;b&gt;Prozess 2 abgestürzt!&lt;/b&gt;&lt;br/&gt;Dies könnte durch unzulässige Parameter oder Optionen verursacht worden sein.</translation>
    </message>
    <message>
        <source>&lt;b&gt;Unknown error!&lt;/b&gt;&lt;br/&gt;This could be caused by invalid parameters or options.</source>
        <translation>&lt;b&gt;Unbekannter Fehler!&lt;/b&gt;&lt;br/&gt;Dies könnte durch unzulässige Parameter oder Optionen verursacht worden sein.</translation>
    </message>
    <message>
        <source>&quot;%1&quot;: Failed to start! No such program or command.
</source>
        <translation>&quot;%1&quot;: Start fehlgeschlagen! Unbekannter Befehl oder unbekanntes Programm.
</translation>
    </message>
    <message>
        <source>The command in the second text editor (if there is any) will be executed after the first one. The message boxes will close themselves after 10 seconds.&lt;br/&gt;To start a program just type i.e. &quot;firefox&quot; or &quot;firefox www.google.com&quot; and then click on Start. Commands etc. can be linked by &quot;&amp;&amp;&quot; etc. &lt;br/&gt;&lt;br/&gt;If the process is &quot;finished&quot; although it is still running, then try the --nofork option (i.e. kopete --nofork). Note that this will also occure for some programs like gedit, firefox or gnome-terminal if they are already running.&lt;br/&gt;&lt;br/&gt;When you want to start a program or command with sudo, please use for example gksu(do) or kdesu(do).&lt;br/&gt;&lt;br/&gt;make examples:&lt;br/&gt;&amp;nbsp;make -C /path/to/project&lt;br/&gt;&amp;nbsp;make clean -C /path/to/project&lt;br/&gt;&lt;br/&gt;About Errors:&lt;br/&gt;Because almost every program gives a different error code, it is impossible to say what happend. So just log the output and see what kind of error occured. The output files can be found at &lt;i&gt;~/.qprogram-starter/&lt;/i&gt;.&lt;br/&gt;&lt;br/&gt;If the shutdown won&apos;t work, it means that &quot;sudo shutdown -P now&quot; is used. This needs root permissions. You can do the this:&lt;br/&gt;&lt;br/&gt;Post the following in a terminal:&lt;pre&gt;EDITOR=nano sudo -E visudo&lt;/pre&gt; and add this line:&lt;pre&gt;* ALL = NOPASSWD:/sbin/shutdown&lt;/pre&gt; whereas * replaces the username or %groupname.&lt;br/&gt;&lt;br/&gt;The configuration-file can be found at &lt;i&gt;~/.qprogram-starter/&lt;/i&gt;.</source>
        <translation>Der Befehl im zweiten Texteditor (falls einer eingegeben wurde) wird nach dem Ersten ausgeführt. Die Hinweisfenster werden sich nach 10 Sekunden selbst beenden.&lt;br/&gt;Um ein Programm zu starten, gib einfach z.B. &quot;firefox&quot; oder &quot;firefox www.google.de&quot; ein und klicke dann auf Start. Befehle etc. können mit &quot;&amp;&amp;&quot; etc. verkettet werden.&lt;br/&gt;&lt;br/&gt;Wenn der Prozess &quot;beendet&quot; ist, obwohl er noch läuft, probiere die --nofork Option (z.B. kopete --nofork). Beachte, dass dies auch bei einigen Programmen wie gedit, firefox oder gnome-terminal auftritt, wenn sie bereits laufen.&lt;br/&gt;&lt;br/&gt;Wenn man ein Programm oder ein Kommando mit sudo starten möchte, benutze bitte z.B. gksu(do) oder kdesu(do).&lt;br/&gt;&lt;br/&gt;make Beispiele:&lt;br/&gt;&amp;nbsp;make -C /path/to/project&lt;br/&gt;&amp;nbsp;make clean -C /path/to/project&lt;br/&gt;&lt;br/&gt;Über die Fehler:&lt;br/&gt;Weil fast jedes Programm unterschiedliche Fehlerkodes ausgeben, ist es unmöglich zu sagen was passiert ist. Protokolliere also einfach die Ausgaben und sieh was für eine Art Fehler aufgetreten ist. Die Ausgabedateien kann man unter &lt;i&gt;~/.qprogram-starter/&lt;/i&gt; finden.&lt;br/&gt;&lt;br/&gt;Falls der Shutdown nich funktioniert, bedeutet das, dass &quot;sudo shutdown -P now&quot; benutzt wird. Dies benötigt Root-Rechte. Dies kann man machen:&lt;br/&gt;&lt;br/&gt;Füge das Folgende in ein Terminal ein:&lt;pre&gt;EDITOR=nano sudo -E visudo&lt;/pre&gt;und füge diese Zeile hinzu:&lt;pre&gt;* ALL = NOPASSWD:/sbin/shutdown&lt;/pre&gt;wobei * den Benutzernamen oder %Gruppennamen ersetzt.&lt;br/&gt;&lt;br/&gt;Die Konfigurations-Datei kann man unter &lt;i&gt;~/.qprogram-starter/&lt;/i&gt; finden.</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Configure</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Version </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ctrl+Q</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ctrl+P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ctrl+H</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Preferences</name>
    <message>
        <source>Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gnome session</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>KDE session</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shutdown Method:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The File &quot;%1&quot; is not writable!
Maybe you just don&apos;t have the permissions to do so.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Welcome to qprogram-starter!
If you want qprogram-starter to automatically shutdown the system and you are using the Gnome Shell, then you are likely to get a shutdown dialog from there. If you want a direct shutdown, then please consider going into the preferences and setting the shutdown method to ConsoleKit or something else.

Please feel free to visit https://launchpad.net/~hakaishi to report bugs or for anyting concerning translations.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="unfinished">Fehler</translation>
    </message>
    <message>
        <source>Please read this carefully!</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
