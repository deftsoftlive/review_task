---
layout: adelaide
title: Testimonials
permalink: /adelaide/testimonials/
---


<div id="main-content" class="main-content testimonial_layout">
	<div class="testimonial_internal_wrapper">
		<!-- <div id="primary" class="content-area testimonial_layout_left">
			Testing left Widget
		</div> -->
		<div id="primary" class="content-area testimonial_layout_right">
			<div id="content" class="site-content" role="main">
							<article id="post-523" class="post-523 page type-page status-publish hentry">
								<header class="entry-header">
									<h1 class="entry-title">Testimonials</h1>
								</header><!-- .entry-header -->
								<div class="entry-content">
									<p><div id="ttshowcase_0"><!-- Custom Styles for Grid Layout of Testimonials Showcase --><style type="text/css" scoped>#ttshowcase_0 .tt_theme_speech .ttshowcase_rl_quote_sided .ttshowcase_rl_quote, 
			         	#ttshowcase_0 .tt_theme_speech .ttshowcase_rl_quote_block .ttshowcase_rl_quote, 
			         	#ttshowcase_0 .tt_theme_speech .ttshowcase_rl_quote_sided .ttshowcase_rl_quote a, 
	         			#ttshowcase_0 .tt_theme_speech .ttshowcase_rl_quote_block .ttshowcase_rl_quote a
			    			{
								background:#f5f5f5;
								color:#333333;
							}#ttshowcase_0 .tt_theme_speech .ttshowcase_rl_quote_block .ttshowcase_rl_quote:after,
							#ttshowcase_0 .tt_theme_speech .tt_quote_info-below .ttshowcase_rl_quote:after,
							#ttshowcase_0 .tt_theme_speech .tt_quote_info-above .ttshowcase_rl_quote:after
							 {
								border-color: #f5f5f5 transparent;
							}#ttshowcase_0 .tt_theme_speech .ttshowcase_rl_quote_sided .ttshowcase_rl_quote:after {
								border-color: transparent #f5f5f5;
							}#ttshowcase_0 .tt_theme_speech .tt_info-left,
							#ttshowcase_0 .tt_theme_speech .tt_info-right
							 {
								width: 20px;
							}</style>
							
<div class="ttshowcase_wrap tt_theme_speech">

{% assign comments = site.data.comments | sort %}

{% for comment in comments reversed %}
  {% assign commentData = comment[1] %}
    <div>
	<div class="ttshowcase_rl_box tt_1cl tt_text_left " id="tt492" ><div class="ttshowcase_rl_breed"><div class="ttshowcase_rl_aditional_info cstm-txt tt_table_cell_right"></div><div class="tt_quote_info-below ttshowcase_rl_quote_block" ><div class="ttshowcase_rl_quote"><p>{{ commentData.comment }}</p>
</div></div><div class="ttshowcase_rl_info_wrap tt_info-below"></div><div class="ttshowcase_rl_title reviewer">By {{ commentData.name }}</div></div></div>
{% endfor %}


<div class="ttshowcase_rl_box tt_1cl tt_text_left " id="tt492" ><div class="ttshowcase_rl_breed"><div class="ttshowcase_rl_aditional_info cstm-txt tt_table_cell_right">
<form method="POST" action="https://api.staticman.net/v2/entry/deftsoftlive/review_task/master/comments">
  <input name="options[redirect]" type="hidden" value="https://bchurrasco.com.au/adelaide/testimonials">
  <input name="options[slug]" type="hidden" value="{{ page.slug }}">
  <label>Name: <input name="fields[name]" type="text"></label>
  <label>Message: <textarea name="fields[comment]"></textarea></label>
  
  <button type="submit">Go!</button>
</form></div></div></div>
