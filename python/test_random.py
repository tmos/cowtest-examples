import unittest
import os

class UX_tests(unittest.TestCase):
    def test_homepageTitle(self):
         assert os.environ.get('TEST_URL') == 'True';

if __name__ == '__main__':
    from pycotap import TAPTestRunner
    suite = unittest.TestLoader().loadTestsFromTestCase(UX_tests)
    TAPTestRunner().run(suite)
