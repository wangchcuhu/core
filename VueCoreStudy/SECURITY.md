# Reporting a Vulnerability

To report a vulnerability, please email security@vuejs.org.

While the discovery of new vulnerabilities is rare, we also recommend always using the latest versions of Vue and its official companion libraries to ensure your application remains as secure as possible.

Please note that we do not consider XSS via template expressions a valid attack vector, because it can only happen if the user intentionally uses untrusted content as template compilation source. This is similar to knowingly pasting untrusted scripts into a browser console. We explicitly warn users against using untrusted content as template compilation source in our documentation.


报告一个漏洞

如需报告漏洞，请发送电子邮件至security@vuejs.org。

虽然很少发现新的漏洞，但我们也建议始终使用最新版本的Vue及其官方配套库，以确保您的应用程序尽可能地安全。

请注意，我们不认为通过模板表达式跨站攻击是有效的攻击向量，
因为只有当用户故意使用不可信的内容作为模板编译源时才会发生这种情况。
这类似于故意将不受信任的脚本粘贴到浏览器控制台。
我们在文档中明确警告用户不要使用不可信的内容作为模板编译源。