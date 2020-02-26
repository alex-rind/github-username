import githubUsername from '.';
import test from 'ava';

test('gets GitHub username from email', async t => {
	t.is(await githubUsername('sindresorhus@gmail.com'), 'sindresorhus');
});

test('gets GitHub username from email using Commit Search API', async t => {
	t.is(await githubUsername('markdotto@gmail.com'), 'mdo');
});

test('rejects when GitHub has no user for the email', async t => {
	await t.throwsAsync(githubUsername('nogithubaccount@example.com'));
});

test('rejects when email is missing', async t => {
	await t.throwsAsync(githubUsername());
});

test('rejects when email is invalid', async t => {
	await t.throwsAsync(githubUsername('sindresorhus_gmail.com'));
});

test('rejects when email is not a string', async t => {
	await t.throwsAsync(githubUsername(() => 'sindresorhus_gmail.com'));
});

test('gets GitHub username from a GitHub-provided noreply email address', async t => {
	t.is(await githubUsername('1217527+alex-rind@users.noreply.github.com'), 'alex-rind');
});
