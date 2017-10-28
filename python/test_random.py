import unittest
import os
from selenium import webdriver
driver = webdriver.PhantomJS()

class UX_tests(unittest.TestCase):
    def test_homepageTitle(self):
        driver.get(os.environ.get('TEST_URL'))
        pageTitle = driver.title
        driver.quit()

        assert pageTitle != '';


"The next bloc makes the test output TAP"
if __name__ == '__main__':
    from pycotap import TAPTestRunner
    suite = unittest.TestLoader().loadTestsFromTestCase(UX_tests)
    TAPTestRunner().run(suite)
