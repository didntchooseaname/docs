---
title: Google Ads, une menace bien réelle
description: Pourquoi Google ads est une menace sérieuse pour les entreprises et les particuliers.
categories: [Cybersécurité]
date: 2024-07-01
tags: [Cybersécurité, google, ads, threat]
order: 2
---

![](cybersecurite/google_ads_threat/google-ads.webp)

Les publicités Google sont devenues un sérieux problème pour la sécurité informatique, servant de **vecteur de distribution** pour divers types de **logiciels malveillants**.
Cette tendance alarmante exploite la confiance des utilisateurs envers l'ecosystème (et plateforme publicitaire) de Google pour propager des logiciels malveillants et
compromettre des systèmes. Un exemple récent illustre parfaitement cette menace. En juin 2024, une nouvelle souche de malware ciblant **Mac** a été découverte.
Ces publicités malveillantes imitaient **Arc**, un navigateur populaire sur macOS, redirigeant les utilisateurs vers un site web contrefait :  

![Source : arstechnica.com](cybersecurite/google_ads_threat/malicious-google-ad-for-fake-arc-browser.webp)

Une fois téléchargé et installé, le logiciel malveillant transmettait les données de l'utilisateur (un infostealer appelé Poseidon).
**Ce n'est pas un incident isolé**, des attaquants utilisent régulièrement Google Ads pour diffuser divers types de logiciels malveillants à travers de sites trompeurs.
Ceux-ci imitent des logiciels légitimes populaires tels que **VLC**, **7-Zip** et **CCleaner** et paient **Google** pour être référencés au dessus des autres résultats (exemple pour Open Broadcaster Software) :  

![Source : blog.osarmor.com](cybersecurite/google_ads_threat/obs-studio-search-results.webp)

La menace est particulièrement insidieuse car elle exploite la **légitimité perçue de Google** et par extension son module **"Ads"**. Les utilisateurs, habitués à faire confiance aux **résultats sponsorisés** de Google, peuvent être moins vigilants face à ces annonces malveillantes. 

!!!primary Experience personnelle
À titre personnel, une entreprise dans laquelle j'ai été interne à subit une **crise** (type ransomware) dûe à une **ransomnote** présente en plein écran sur le pc d'un collaborateur. J'ai recommandé à plusieurs reprises un **bloqueur de publicités** côté naviguateur, mais la hiérarchie pensait que les **firewalls** feraient le travail (sachant qu'il étaient neufs à ce moment et fraichement configurés, je ne vais pas rentrer dans les détails, les blocklists de domaines c'est clairement pas suffisant...). En plus de générer du stress et une cessation de l'activité temporaire du collaborateur, l'entreprise à fait appel à un **prestataire spécialisé en forensics** pour trouver l'origine de cette "attaque", qui s'avèrait être un **site imitant une ransomnote en plein écran**. Site atteint par l'utilisateur à cause des **liens sponsorisés** en haut de page sur Google (bloqués par défaut par des bloqueurs de publicités).
!!!

Les fichiers téléchargés par ces sites malveillants sont très souvent des **archives au format zip avec un mot de passe**. Cela permet de **contourner les scans antivirus** des plates-formes sur lesquelles ils sont hébergés.  

Comme toujours, pour s'en prémunir il est nécessaire de **télécharger les logiciels uniquement à partir de sources officielles** et de rester vigilant face aux instructions d'installation inhabituelles. Les utilisateurs doivent être conscients que même les annonces légitimes en apparance, peuvent potentiellement héberger du **contenu malveillant**. Bien que Google affirme prendre des mesures contre les annonceurs malveillants une fois informé, la responsabilité de l'identification et de la suppression de ces menaces incombe souvent aux **produits antivirus finaux** ou **solutions de sécurité diverses**. Cette situation souligne la nécessité d'une vigilance accrue de la part des utilisateurs et d'une amélioration des **mécanismes de détection** et de prévention de la part de Google. Rappelons que les revenus publicitaires pèsent énormement pour l'entreprise :  

![Source : https://the-media-leader.fr/les-revenus-publicitaires-de-google-ont-augmente-de-59-en-2023/](cybersecurite/google_ads_threat/google-ads-evolution-graph.webp)

Ce point laisse penser qu'au mieux la firme ferme les yeux pour avoir des **revenus plus importants** englobant également tous un package d'**acteurs malveillants**, ou au pire **néglige les contrôles de sécurité effectués**...  

[!embed](https://youtu.be/c5fAiwVvr6s)
 
[!embed](https://youtu.be/kgckm2DGOOY)

**- Sources :**

[https://arstechnica.com/security/2024/06/mac-info-stealer-malware-distributed-through-google-ads/](https://arstechnica.com/security/2024/06/mac-info-stealer-malware-distributed-through-google-ads/)  
[https://latesthackingnews.com/2023/01/05/new-malware-campaign-spreads-by-exploiting-google-ads/](https://latesthackingnews.com/2023/01/05/new-malware-campaign-spreads-by-exploiting-google-ads/)  
[https://www.schneier.com/blog/archives/2023/02/malware-delivered-through-google-search.html](https://www.schneier.com/blog/archives/2023/02/malware-delivered-through-google-search.html)  
[https://www.bleepingcomputer.com/news/security/ransomware-access-brokers-use-google-ads-to-breach-your-network/](https://www.bleepingcomputer.com/news/security/ransomware-access-brokers-use-google-ads-to-breach-your-network/)  
[https://www.bleepingcomputer.com/news/security/hackers-push-malware-via-google-search-ads-for-vlc-7-zip-ccleaner/](https://www.bleepingcomputer.com/news/security/hackers-push-malware-via-google-search-ads-for-vlc-7-zip-ccleaner/)  

**- References :**

[https://www.bleepingcomputer.com/news/security/google-ads-push-fake-google-authenticator-site-installing-malware/](https://www.bleepingcomputer.com/news/security/google-ads-push-fake-google-authenticator-site-installing-malware/)  
[https://www.bleepingcomputer.com/tag/google-ads/](https://www.bleepingcomputer.com/tag/google-ads/)  
[https://www.malwarebytes.com/blog/scams/2024/08/dozens-of-google-products-targeted-by-scammers-via-malicious-search-ads](https://www.malwarebytes.com/blog/scams/2024/08/dozens-of-google-products-targeted-by-scammers-via-malicious-search-ads)
